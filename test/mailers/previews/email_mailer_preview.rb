# Preview all emails at http://localhost:3000/rails/mailers/email_mailer
class EmailMailerPreview < ActionMailer::Preview
    def new_mail
        user = User.create(first_name: "Victor", last_name: "Mmulah", email:"vm11@gmail.com", password:"12345678", password_confirmation:"12345678", phone_number: "+254734562723")

        EmailMailer.with(user: user).new_mail
    end
end
