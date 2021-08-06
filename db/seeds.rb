breeder_name = ["John", "Kevin", "Peter", "Victoris", "Sarah"]
breed_type = ["German Shepherd", "Bulldog", "Poodle", "Pug"]

6.times do |a|
  breeder = Breeder.create(
    name: "#{breeder_name[a % breeder_name.length]}_#{a}",
    qualified: a % 2 === 0 ? true : false,
    start_from: Date.today - a.year,
    breed_type: "#{breed_type[a % breed_type.length]}_#{a}"
  )
  next if breeder.id.nil?

  4.times do |m|
    dog = breeder.dogs.create(
      name: "DOG_name_#{m}",
      sex: m % 2,
      birthday: Date.today - a.year - m.month,
      description: "My breeder is #{breeder.name} and my breed type is #{breeder.breed_type}",
      ic_chip: rand(1..9999999)
    )

    2.times do |l|
      litter =  dog.litters.create(
        birthday: Date.today - m.month - l.day
      )


      7.times do |p|
        litter.puppies.create(
          name: "PUPPY_name_#{p}",
          sex: p % 2,
          price: p * 1000,
          available: p.even?
        )
      end
    end
  end
end
