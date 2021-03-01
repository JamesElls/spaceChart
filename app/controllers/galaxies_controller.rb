class GalaxiesController < ApplicationController
    before_action :define_galaxy, only: [:show, :edit, :update]

    def index 
        render component: 'Galaxies', props: {galaxies: Galaxy.all}
    end

    def show
        @stars = @galaxy.stars.all
        render component: 'Galaxy', props: {galaxy: @galaxy, stars: @stars}
    end

    def new
        @galaxy = Galaxy.new
        render component: 'GalaxyForm', props: {galaxy: @galaxy}
    end 

    def create
        Galaxy.create(name: params[:galaxy][:name], foundBy: params[:galaxy][:foundBy], lightYears: params[:galaxy][:lightYears])
        redirect_to root_path
    end 

    def edit
        render component: 'GalaxyForm', props: {galaxy: @galaxy}
    end

    def update
        @galaxy.update(name: params[:galaxy][:name], foundBy: params[:galaxy][:foundBy], lightYears: params[:galaxy][:lightYears])
        redirect_to root_path
    end

    def destroy
        @galaxy.delete
        redirect_to root_path
    end

    private

    def define_galaxy
        @galaxy = Galaxy.find(params[:id])
    end


end
