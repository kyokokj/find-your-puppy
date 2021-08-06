module Api
  module V1
    class DogsController < ApplicationController
      def index
        breeder = Breeder.includes(dogs: [:litters, :puppies]).find(params[:breeder_id])

        render json: {
          breeder: breeder.name,
          dogs: breeder.dogs.to_a,
          puppies: breeder.puppies
        }, status: :ok
      end

      def update
      end
    end
  end
end
