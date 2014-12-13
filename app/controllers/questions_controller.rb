class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def create
    params
    question = Question.create email: params[:email], body: params[:body]
    render json: question
  end
end
