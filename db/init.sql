DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'dockeruser') THEN
    CREATE USER dockeruser WITH PASSWORD 'dockerpassword';
  END IF;
END $$;

CREATE DATABASE dockerdb;
GRANT ALL PRIVILEGES ON DATABASE dockerdb TO dockeruser;
ALTER DATABASE dockerdb OWNER TO dockeruser;