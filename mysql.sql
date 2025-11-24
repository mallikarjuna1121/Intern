select u.*,f.friend_id,w.post,w.posting_date 
from tUser u join tFriends f 
on u.user_id=f.user_id join tWall w 
on w.user_id=u.user_id where name='malli';


select w.post 
from tUser u join tWall w 
on u.user_id=w.user_id where u.name='malli';


select w.post 
from tFriends f join tUser u1 
on f.user_id=u1.user_id join tUser u2 
on f.friend_id = u2.user_id join tWall w 
on w.user_id = u2.user_id
where u1.name='malli' and u2.name='raja';


select u3.name as FriendOfFriend
from tFriends f join tUser u1 
on f.user_id=u1.user_id join tUser u2 
on f.friend_id=u2.user_id join tFriends ff
on ff.user_id=u2.user_id join tUser u3
on u3.user_id=ff.friend_id 
where u1.name='malli' and u2.name='raja';


delete f
from tFriends f join tUser u1
on f.user_id=u1.user_id join tUser u2 
on f.friend_id=u2.user_id
where u1.name='malli' and u2.name='hari';


insert into tWall(user_id,post)
select user_id,'this is my post'
from tUser
where name='malli';