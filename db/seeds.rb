3.times do |a|
  breeder = Breeder.new(
    name: "breeder_#{a}",
    qualified: a.even?,
    experience_year: a * 2,
    breed_type: "breed type_#{a}"
  )

  4.times do |m|
    dog = breeder.dogs.build(
      name: "dog_#{m}",
      sex: m % 2,
      birthday: Date.today - m * 100
    )

    2.times do |l|
      litter =  dog.litters.build(
        birthday: Date.today - 100
      )

      7.times do |p|
        litter.puppies.build(
          name: "puppy_#{}",
          sex: p % 2,
          price: p * 1000,
          available: p.even?
        )
      end
    end
  end
end
