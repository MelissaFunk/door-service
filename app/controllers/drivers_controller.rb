class DriversController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  rescue_from ActiveRecord::RecordNotFound, with: :driver_not_found_response

  def index
    render json: Driver.all, status: :ok
  end

  def create
    driver = Driver.create!(driver_params)
    session[:driver_id] = driver.id
    render json: driver, status: :created
  end

  def show
    driver = Driver.find_by(id: params[:id])
    render json: driver, status: :ok
  end
  
  def driver_auth
    if current_driver
      render json: current_driver, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end
    
  def update
    current_driver.update(driver_params)
    render json: current_driver, status: :accepted
  end

  private
  
  def driver_params
    params.permit(:name, :username, :password)
  end

  def render_unprocessable_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def driver_not_found_response
    render json: { error: "Driver not found" }, status: :not_found
  end
end
