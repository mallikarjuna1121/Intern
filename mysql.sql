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
SELECT u.*,f.friend_id,w.post,w.posting_date
FROM tUser u
LEFT JOIN tFriends f ON u.user_id = f.user_id
LEFT JOIN tWall w ON u.user_id = w.user_id
WHERE u.name = 'malli';

-- Query to fetch all posts of a person given his name
SELECT w.post
FROM tUser u
LEFT JOIN tWall w ON u.user_id = w.user_id
WHERE u.name = 'malli';

-- Query to fetch all posts of a particular friend of a person, given his name and the friends name
SELECT w.post
FROM tUser u1
LEFT JOIN tFriends f ON u1.user_id = f.user_id
LEFT JOIN tUser u2 ON f.friend_id = u2.user_id
LEFT JOIN tWall w ON w.user_id = u2.user_id
WHERE u1.name = 'malli' AND u2.name = 'raja';

-- Query to fetch all friends of a particular friend of a person, given the persons name and friend's name
SELECT u3.name AS FriendOfFriend
FROM tUser u1
LEFT JOIN tFriends f ON u1.user_id = f.user_id
LEFT JOIN tUser u2 ON f.friend_id = u2.user_id
LEFT JOIN tFriends ff ON ff.user_id = u2.user_id
LEFT JOIN tUser u3 ON u3.user_id = ff.friend_id
WHERE u1.name = 'malli' AND u2.name = 'raja';

-- Query to remove a particular friend from a persons list, given the persons name
DELETE f
FROM tFriends f
LEFT JOIN tUser u1 ON f.user_id = u1.user_id
LEFT JOIN tUser u2 ON f.friend_id = u2.user_id
WHERE u1.name = 'malli' AND u2.name = 'hari';

-- Query to post something on his wall
INSERT INTO tWall (user_id, post)
SELECT user_id, 'this is my post'
FROM tUser
WHERE name = 'malli';
