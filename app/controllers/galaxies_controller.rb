class GalaxiesController < ApplicationController
    def index 
        render component: 'Galaxies', props: {galaxies: Galaxy.all}
    end

    def show
        render component: 'Galaxy', props: {galaxy: Galaxy.find(params[:id])}
    end

    def new
        render component: 'GalaxyForm'
    end 

    def create
        Galaxy.create(name: params[:galaxy][:name], foundBy: params[:galaxy][:foundBy], lightYears: params[:galaxy][:lightYears])
        redirect_to root_path
    end 

end
