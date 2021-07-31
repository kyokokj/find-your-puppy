module Api
  module V1
    class BreedersController < ApplicationController
      def index
        breeders = Breeder.all

        render json: {
          breeders: breeders
        }, status: :ok
      end
    end
  end
end
