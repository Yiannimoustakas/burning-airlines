class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by name: params[:name]
    if user.present?

      session[:user_id] = user.id
      redirect_to user_path(user.id)
    else
      flash[:error] = "User Must Be Logged In"
      redirect_to( login_path )
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
