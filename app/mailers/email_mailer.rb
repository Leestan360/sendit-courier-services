class EmailMailer < ApplicationMailer
    def new_mail
        @user = params[:user]
        mail(to: @user.email, subject: "Thanks for joining SENDIT!")
    end
end
