# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

**Process**

- create an app
  > $ rails new find-your-puppy --api
  > $ cd find-your-puppy
- build server sides
- create migrations and models
  > $ rails g migration CreateBreeders
  > $ rails g migration CreateDogs
  > $ rails g migration CreateLitters
  > $ rails g migration CreatePuppies
- Added a new column to Puppies table
  > $ rails g migration AddAvailableToPuppies
  > $ rails g model breeder
  > $ rails g model dog
  > $ rails g model litter
  > $ rails g model puppy
-

-
