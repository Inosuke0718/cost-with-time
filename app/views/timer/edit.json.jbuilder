json.array! @timers do |timer|

  if current_user.id == timer.user_id   
    json.money timer.money
    json.time timer.time
    json.wage timer.wage
    json.people timer.people
    json.created_at timer.created_at
  end

end