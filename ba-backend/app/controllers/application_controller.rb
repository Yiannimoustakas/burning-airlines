class ApplicationController < ActionController::Base
  before_action :fetch_user

  private
  def fetch_user
    # check if session[:user_id] is set, and also if it stores a valid ID, and if so, set an instance varibale containing the user object

    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
    end

    # Make sure we actually found a valid user (i.e. the User ID in the session wasn't stale, from a deleted account)
    # and if we didn't get a valid user (in @current_user) then we clear the session key
    session[:user_id] = nil unless @current_user.present?
  end
end
