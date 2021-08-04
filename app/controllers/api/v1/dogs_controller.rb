module Api
  module V1
    class DogsController < ApplicationController
      def index
        breeders = Breeder.includes(dogs: [:litters, :puppies]).find(params[:breeder_id])

        render json: {
          dogs: breeders.dogs,
          puppies: breeders.puppies
        }, status: :ok
      end

      def update
      end
    end
  end
end
