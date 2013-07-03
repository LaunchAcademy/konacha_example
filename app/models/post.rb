class Post < ActiveRecord::Base
  has_many :comments,
    inverse_of: :post,
    dependent: :destroy

  attr_accessible :body, :title
end
