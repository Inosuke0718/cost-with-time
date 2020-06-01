FactoryBot.define do

  factory :timer do
    id                    {1}
    user_id                {1}
    money                  {12000}
    time                   {800}
    wage                   {3000}
    people                 {12}
    created_at             {"2020-01-01"}
    updated_at             {"2020-01-01"}
  end
  
end 

