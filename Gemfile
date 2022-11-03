source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4"

gem 'bootstrap-sass'

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rack-cors"

# rest-client
gem 'rest-client', '~> 2.0'

# Serializer
gem "active_model_serializers", "~> 0.10.12"

#bcrypt
gem 'bcrypt', '~> 3.1.7'

# https://github.com/activeadmin/activeadmin/issues/7196
gem 'activeadmin'

gem "binding_of_caller"

# Required for ActiveAdmin
gem 'sass-rails'

gem 'bootsnap', require: false

# Plus integrations with:
gem 'inherited_resources', github: 'activeadmin/inherited_resources'
gem 'devise'
gem 'cancancan'
gem 'draper'
gem 'pundit'

group :development, :test do

  gem "minitest"

  gem "minitest-rails"

  gem 'byebug'
  gem 'better_errors'
  gem 'sqlite3'

  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end
