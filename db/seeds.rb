6.times do |a|
  breeder = Breeder.create(
    name: "breeder_#{a}",
    qualified: true,
    experience_year: a * 2,
    breed_type: "breed type_#{a}"
  )
  next if breeder.id.nil?

  4.times do |m|
    dog = breeder.dogs.create(
      name: "dog_#{m}",
      sex: m % 2,
      birthday: Date.today - m * 100
    )

    2.times do |l|
      litter =  dog.litters.create(
        birthday: Date.today - 100
      )


      7.times do |p|
        litter.puppies.create(
          name: "puppy_#{p}",
          sex: p % 2,
          price: p * 1000,
          available: p.even?
        )
      end
    end
  end
end
