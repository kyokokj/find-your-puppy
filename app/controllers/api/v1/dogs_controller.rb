module Api
  module V1
    class DogsController < ApplicationController
      def index
        breeder = Breeder.find(params[:breeder_id])
        dogs = breeder.dogs

        render json: {
          dogs: dogs
        }, status: :ok
      end
    end
  end
end
