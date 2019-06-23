--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8
-- Dumped by pg_dump version 10.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: checklist; Type: TABLE; Schema: public; Owner: diagauto
--

CREATE TABLE public.checklist (
    id integer NOT NULL,
    morning timestamp without time zone,
    afternoon timestamp without time zone,
    users_id integer
);


ALTER TABLE public.checklist OWNER TO diagauto;

--
-- Name: checklist_id_seq; Type: SEQUENCE; Schema: public; Owner: diagauto
--

CREATE SEQUENCE public.checklist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.checklist_id_seq OWNER TO diagauto;

--
-- Name: checklist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: diagauto
--

ALTER SEQUENCE public.checklist_id_seq OWNED BY public.checklist.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: diagauto
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30),
    username character varying(30),
    email character varying(30),
    password character varying(30),
    role integer
);


ALTER TABLE public.users OWNER TO diagauto;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: diagauto
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO diagauto;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: diagauto
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: checklist id; Type: DEFAULT; Schema: public; Owner: diagauto
--

ALTER TABLE ONLY public.checklist ALTER COLUMN id SET DEFAULT nextval('public.checklist_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: diagauto
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: checklist; Type: TABLE DATA; Schema: public; Owner: diagauto
--

COPY public.checklist (id, morning, afternoon, users_id) FROM stdin;
55	2019-06-20 16:48:47.21	2019-06-20 16:48:47.21	1
56	2019-06-20 16:48:47.258	2019-06-20 16:48:47.258	7
57	2019-06-20 16:48:47.265	2019-06-20 16:48:47.265	8
58	2019-06-20 16:48:47.273	2019-06-20 16:48:47.273	9
59	2019-06-20 16:48:47.282	2019-06-20 16:48:47.282	10
60	2019-06-20 16:48:47.291	2019-06-20 16:48:47.291	11
61	2019-06-20 16:48:47.3	2019-06-20 16:48:47.3	12
62	2019-06-20 16:48:47.227	2019-06-20 16:48:47.227	3
63	2019-06-20 16:48:47.235	2019-06-20 16:48:47.235	4
64	2019-06-20 16:48:47.216	2019-06-20 16:48:47.216	2
65	2019-06-20 16:48:47.243	2019-06-20 16:48:47.243	5
66	2019-06-20 16:48:47.25	2019-06-20 16:48:47.25	6
69	2019-06-22 09:11:36.591	2019-06-22 09:11:36.591	6
68	2019-06-22 09:11:36.547	2019-06-22 09:11:36.547	3
71	2019-06-22 09:11:36.566	2019-06-22 09:11:36.566	4
72	2019-06-22 09:11:36.58	2019-06-22 09:11:36.58	5
73	2019-06-22 09:11:36.601	2019-06-22 09:11:36.601	7
74	2019-06-22 09:11:36.61	2019-06-22 09:11:36.61	8
75	2019-06-22 09:11:36.623	2019-06-22 09:11:36.623	9
76	2019-06-22 09:11:36.635	2019-06-22 09:11:36.635	10
77	2019-06-22 11:53:26.292	2019-06-22 12:09:32.815	11
67	2019-06-22 12:14:47.23	2019-06-22 12:19:55.879	1
70	2019-06-22 12:22:43.387	2019-06-22 12:22:52.268	2
78	2019-06-22 12:24:37.93	2019-06-22 12:25:17.463	12
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: diagauto
--

COPY public.users (id, name, username, email, password, role) FROM stdin;
1	Jerry	tom	jerry@example.com	123456	1
2	George	lili	george@example.com	123456	2
3	\N	\N	\N	\N	\N
4	\N	\N	\N	\N	\N
5	edem	\N	lolo@diaz.com	123456	1
6	love	\N	lili@diaz.com	123456	1
7	edemfjd	\N	lilo@diaz.com	123456	1
8	ehlk	liko	liko@diaz.com	123456	1
9	chill	lochi	lochi@diaz		1
10	\N	\N	lochi@diaz.com		\N
11	edem	kilo	edem@diaz.com	123456	2
12	edem	loketo	loketo@gmail.com	123456	1
\.


--
-- Name: checklist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: diagauto
--

SELECT pg_catalog.setval('public.checklist_id_seq', 78, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: diagauto
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: checklist checklist_pkey; Type: CONSTRAINT; Schema: public; Owner: diagauto
--

ALTER TABLE ONLY public.checklist
    ADD CONSTRAINT checklist_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: diagauto
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: checklist checklist_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: diagauto
--

ALTER TABLE ONLY public.checklist
    ADD CONSTRAINT checklist_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

