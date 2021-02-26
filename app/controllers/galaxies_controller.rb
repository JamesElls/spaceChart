class GalaxiesController < ApplicationController
    def index 
        render component: 'Galaxies', props: {galaxies: Galaxy.all}
    end

end
