require 'test_helper'

class FlightControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get flight_new_url
    assert_response :success
  end

  test "should get create" do
    get flight_create_url
    assert_response :success
  end

  test "should get destroy" do
    get flight_destroy_url
    assert_response :success
  end

  test "should get show" do
    get flight_show_url
    assert_response :success
  end

  test "should get edit" do
    get flight_edit_url
    assert_response :success
  end

  test "should get update" do
    get flight_update_url
    assert_response :success
  end

end
