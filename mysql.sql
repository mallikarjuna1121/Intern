-- DB schemas       

-- tUser 
create table tUser(user_id int(11),
                   name varchar(50) not null,
                   email_id varchar(50) not null,
                   password varchar(50) not null,
                   address varchar(100),
                   phone bigint(18),
                   primary key(user_id));

-- tFriends
create table tFriends(user_id int(11),
                      friend_id int(11),
                      foreign key(user_id) references tUser(user_id),
                      foreign key(friend_id) references tUser(user_id));

--tWall
create table tWall(user_id int(11),
                   posting_date datetime default current_timestamp,
                   post varchar(200) not null,
                   foreign key(user_id) references tUser(user_id));



-- Query to fetch all information for a person given his name
select u.*,f.friend_id,w.post,w.posting_date 
from tUser u join tFriends f 
on u.user_id=f.user_id join tWall w 
on w.user_id=u.user_id where name='malli';

-- Query to fetch all posts of a person given his name
select w.post 
from tUser u join tWall w 
on u.user_id=w.user_id where u.name='malli';

-- Query to fetch all posts of a particular friend of a person, given his name and the friends name
select w.post 
from tFriends f join tUser u1 
on f.user_id=u1.user_id join tUser u2 
on f.friend_id = u2.user_id join tWall w 
on w.user_id = u2.user_id
where u1.name='malli' and u2.name='raja';

-- Query to fetch all friends of a particular friend of a person, given the persons name and friend's name
select u3.name as FriendOfFriend
from tFriends f join tUser u1 
on f.user_id=u1.user_id join tUser u2 
on f.friend_id=u2.user_id join tFriends ff
on ff.user_id=u2.user_id join tUser u3
on u3.user_id=ff.friend_id 
where u1.name='malli' and u2.name='raja';

-- Query to remove a particular friend from a persons list, given the persons name
delete f
from tFriends f join tUser u1
on f.user_id=u1.user_id join tUser u2 
on f.friend_id=u2.user_id
where u1.name='malli' and u2.name='hari';

-- Query to post something on his wall
insert into tWall(user_id,post)
select user_id,'this is my post'
from tUser
where name='malli';