# HopIn Schema

## user

This table represents users that have registered to use the app.

#### Schema

user(user_id, first_name, last_name, username, password, driver, vehicle_id, org_id, address, city, state, area_code, start_dt, end_dt)

> Primary Key `user_id`

#### Relationships

The user table contains a `user_id` column that is used as the primary
key. Most tables described below contain a foreign key that maps to this column.

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`user_id` - primary key
`first_name` - user's first name
`last_name` - user's last name
`username` - username to login
`password` - password to login (encrypted)
`driver` - boolean flag if the user is a driver or not
`vehicle_id` - foreign key to the vehicle they are registered with
`address` - user's street address
`city` - user's city
`state` - user's state
`area_code` - user's area code
`start_dt` - date they signed up
`end_dt` - date they left

## vehicle

This table represents the vehicles that have been registered to drive

#### Schema

vehicle(vehicle_id, make, model, year, capacity)

> Primary Key `vehicle_id`

#### Relationships

The vehicle table contains a `vehicle_id` column that is used as the primary
key. The user table has a foreign key to this, as well as the pool table.

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`vehicle_id` - primary key
`make` -  make of the car
`model` -  model of the car
`year` - year of the car
`capacity` -  capacity of the car

## organizations

This table represents the various organizations that can be formed within the app.  
Whether it is for an event, group, company, church event, they all will become an "organization"

#### Schema

organization(org_id, title, member_limit, admin, start_dt, end_dt)

> Primary Key `org_id`

#### Relationships

The organization table contains a `org_id` column that is used as the primary
key. A couple tables have a foreign key to this: pool, participant.

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`org_id` - primary key
`title` -  title of the organization
`member_limit` -  how many people can be associated with the group
`admin` - who owns the group (foreign key to a user_id)
`start_dt` -  when the group was created
`end_dt` -  when the group was deleted

## pool

A pool is a specific car of people.  

#### Schema

pool(pool_id, org_id, driver_id, vehicle_id, start_time, start_address, end_time, end_address, start_dt, end_dt)

> Primary Key `pool_id`

#### Relationships

The pool table contains a `pool_id` column that is used as the primary
key. One table uses this as a foreign key, and that's Passenger

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`pool_id` - primary key
`org_id` -  foreign key to the organization it's apart of
`driver_id` -  foreign key to the user who is the driver
`vehicle_id` - foreign key to the vehicle used in the pool
`start_time` - when the pool is going to start
`start_address` - where the pool starts (driver's address)
`end_time` - when the pool ends
`end_address` - where the pool finished
`start_dt` -  when the pool was created
`end_dt` -  when the pool was deleted

## passenger

A simple table that holds pool_ids and user_ids.  Helps us map a many-to-many relationship between pools and users  

#### Schema

passenger(pool_id, user_id)

> Primary Key - none

#### Relationships

There is no primary key here, and no other relationships. This table is used to help map many-to-many relationships

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`pool_id` - foreign key to a pool
`user-id` -  foreign key to a user

## participant

A simple table that holds org_ids and user_ids.  Helps us map a many-to-many relationship between organizations and users  

#### Schema

participant(org_id, user_id)

> Primary Key - none

#### Relationships

There is no primary key here, and no other relationships. This table is used to help map many-to-many relationships

#### Evidence of Normalization

The relationship described above is evidence of normalization in this
table.

#### Column Names

`org_id` - foreign key to an organization
`user-id` -  foreign key to a user