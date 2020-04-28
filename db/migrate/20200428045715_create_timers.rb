class CreateTimers < ActiveRecord::Migration[5.0]
  def change
    create_table :timers do |t|

      t.integer :money, null: false
      t.integer :time, null: false
      t.integer :wage, null: false
      t.integer :people, null: false

      t.timestamps
    end
  end
end
