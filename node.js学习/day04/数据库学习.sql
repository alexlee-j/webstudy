-- select * from users;
-- select username from users;
-- insert into users(username,password) values('tony','123456789')
-- select * from users;
-- update users set password='888888' where id=3;
-- select * from users where id = 3 and status = 0;


-- select * from users order by id desc;
-- update users set status = 1 where username = 'tony';
-- select * from users order by status desc , username desc;
-- select count(*) from users where status = 0;

select count(*) as '总数' from users where status = 0;