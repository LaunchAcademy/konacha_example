class Comment < ActiveRecord::Base
  belongs_to :post,
    inverse_of: :comments

  attr_accessible :body, :post_id
end
