class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

	def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def current_driver
    @current_driver ||= Driver.find_by_id(session[:driver_id])
  end

end
