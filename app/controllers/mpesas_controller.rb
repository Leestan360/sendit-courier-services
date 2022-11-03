class MpesasController < ApplicationController
  require 'rest-client'
  rescue_from SocketError, with: :OfflineMode

  before_action :authorize
  skip_before_action :authorize, only: [:stkpush, :polling_payment]

  def stkpush 
    phoneNumber = params[:phoneNumber]
    amount = params[:amount]

    url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    timestamp = "#{Time.now.strftime "%Y%m%d%H%M%S"}"
    business_short_code = ENV["MPESA_SHORTCODE"]
    password = Base64.strict_encode64("#{business_short_code}#{ENV["MPESA_PASSKEY"]}#{timestamp}")
    
    payload = {
      'BusinessShortCode': business_short_code,
			'Password': password,
			'Timestamp': timestamp,
			'TransactionType': "CustomerPayBillOnline",
			'Amount': amount,
			'PartyA': phoneNumber,
			'PartyB': business_short_code,
			'PhoneNumber': phoneNumber,
			'CallBackURL': "#{ENV["CALLBACK_URL"]}/callback_url",
			'AccountReference': 'SendIT Courier Services',
			'TransactionDesc': "SendIT Courier Services"
    }.to_json
    
    headers = {
      content_type: 'application/json', 
      Authorization:"Bearer #{get_access_token}"
    }
    response = RestClient::Request.new({
      method: :post,
      url: url,
      payload: payload,
      headers: headers
      }).execute do |response, request|
        case response.code
        when 500
          [ :error, JSON.parse(response.to_str) ]
        when 400
          [ :error, JSON.parse(response.to_str) ]
        when 200
          [ :success, JSON.parse(response.to_str) ]
        else
          fail "Invalid response #{response.to_str} received."
        end
      end
    
    render json: response
  end 

  def polling_payment
    # Check if payment has been paid
    checkoutId = params[:checkoutRequestID]

    timestamp = "#{Time.now.strftime "%Y%m%d%H%M%S"}"
    business_short_code = ENV["MPESA_SHORTCODE"]
    password = Base64.strict_encode64("#{business_short_code}#{ENV["MPESA_PASSKEY"]}#{timestamp}")

    url = ENV['QUERY_URL']

    headers = {
      content_type: 'application/json', 
      Authorization: "Bearer #{get_access_token}"
    }

    payload = {
      'BusinessShortCode' => business_short_code,
      'Password' => password,
      'Timestamp' => timestamp,
      'CheckoutRequestID' => checkoutId
    }.to_json

    response = RestClient::Request.new({
      method: :post,
      url: url,
      payload: payload,
      headers: headers
      }).execute do |response, request|
        puts response
        case response.code
        when 500
          [ :error, JSON.parse(response.to_str) ]
        when 400
          [ :error, JSON.parse(response.to_str) ]
        when 200
          [ :success, JSON.parse(response.to_str) ]
        else
          fail "Invalid response #{response.to_str} received."
        end
      end

    render json: response 
  end

  private 

  def generate_access_token_request
    @url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

    @consumer_key =  ENV['MPESA_CONSUMER_KEY']
    @consumer_secret = ENV['MPESA_CONSUMER_SECRET']
    @userpass = Base64::strict_encode64("#{@consumer_key}:#{@consumer_secret}")
    @headers = {
      Authorization: "Bearer #{@userpass}"
    }
    
    res = RestClient::Request.execute(url: @url, method: :get, headers:{Authorization: "Basic #{@userpass}"})
    res
  end 

  def get_access_token
    res = generate_access_token_request()
    if res.code != 200
      r = generate_access_token_request()
      if res.code != 200
        raise MpesaError('Unable to generate access token')
      end 
    end
    body = JSON.parse(res, { symbolize_names: true })
    token = body[:access_token]
    AccessToken.destroy_all()
    AccessToken.create!(token: token)
    token
  end 

  # Errors returned
  def OfflineMode
    render json: { errors: ['Connect to the Internet'] }
  end 

    # authorizing a user
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      # render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
      if @current_user
        render json: @current_user
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

end