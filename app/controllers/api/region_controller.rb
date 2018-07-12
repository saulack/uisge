class Api::RegionController < ApplicationController

  def index
    @regions = Region.all
  end
end
