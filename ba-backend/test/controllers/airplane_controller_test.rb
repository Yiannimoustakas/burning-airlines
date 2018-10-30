require 'test_helper'

class AirplaneControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get airplane_new_url
    assert_response :success
  end

  test "should get create" do
    get airplane_create_url
    assert_response :success
  end

  test "should get destroy" do
    get airplane_destroy_url
    assert_response :success
  end

  test "should get show" do
    get airplane_show_url
    assert_response :success
  end

  test "should get edit" do
    get airplane_edit_url
    assert_response :success
  end

  test "should get update" do
    get airplane_update_url
    assert_response :success
  end

end
