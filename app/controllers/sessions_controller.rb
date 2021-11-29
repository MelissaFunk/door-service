class SessionsController < ApplicationController

  def user_create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid username and/or password"] }, status: :unauthorized
    end
  end

  def user_destroy
    session.delete :user_id
    head :no_content
  end

  def driver_create
    driver = Driver.find_by(username: params[:username])
    if driver&.authenticate(params[:password])
      session[:driver_id] = driver.id
      render json: driver, status: :created
    else
      render json: { errors: ["Invalid username and/or password"] }, status: :unauthorized
    end
  end

  def driver_destroy
    session.delete :driver_id
    head :no_content
  end
  


end