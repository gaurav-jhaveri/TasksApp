class TasksController < ApplicationController
  respond_to :json
  
  def create
    @task = Task.new(params[:task])
    
    if @task.save
      render :json => @json
    else
      render :json => @task.errors, :status => 422
    end
  end
  
  def index
    @tasks = Task.all
    respond_to do |format|
      format.html { render :index }     #Entry-point for Backbone app
      format.json { render :json => @tasks }
    end
  end
end