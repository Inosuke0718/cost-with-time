class CreateTimers < ActiveRecord::Migration[5.0]
  def change
    create_table :timers do |t|

      t.integer :user_id,            null: false
      t.integer :money
      t.integer :time,               null: false
      t.integer :wage
      t.integer :people
      t.timestamps
      
    end
  end
end
