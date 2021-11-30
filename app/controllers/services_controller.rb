class ServicesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
	rescue_from ActiveRecord::RecordNotFound, with: :service_not_found_response

  def index
    render json: Service.all, status: :ok
  end

  def show
    service = Service.find_by(id: params[:id])
    render json: service, status: :ok
  end

  def create
    service = Service.create!(service_params)
    render json: service, status: :created
  end

  def update
    service = Service.find(params[:id])
    service.update!(service_params)
    render json: service, status: :accepted
  end

  def destroy
    service = Service.find(params[:id])
    service.destroy
    head :no_content
  end

  private

  def service_params
    params.permit(:user_id, :driver_id, :status, :starting_address, :ending_address, :service_type, :rating, :price, :message)
  end

  def render_unprocessable_response(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end

  def service_not_found_response
    render json: { error: "Service not found" }, status: :not_found
  end
  
end
