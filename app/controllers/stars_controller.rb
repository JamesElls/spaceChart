class StarsController < ApplicationController
    before_action :get_galaxy, :get_star


    def show
        render component: 'Star', props: {star: @star}
    end

    private

    def get_galaxy
        @galaxy = Galaxy.find(params[:galaxy_id])
    end

    def get_star
        @star = @galaxy.stars.find(params[:id])
    end


end
