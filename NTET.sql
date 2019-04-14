--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
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


--
-- Name: f_fecha_ingreso(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.f_fecha_ingreso() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN

IF (TG_OP = 'INSERT') THEN

	UPDATE conductor_taxi 

	SET fechaingreso = CURRENT_DATE;

END IF;

RETURN NULL;

END;

$$;


ALTER FUNCTION public.f_fecha_ingreso() OWNER TO postgres;

--
-- Name: f_hora_ingreso(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.f_hora_ingreso() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN

IF (TG_OP = 'INSERT') THEN

	UPDATE conductor_taxi 

	SET horaingreso = LOCALTIME;

END IF;

RETURN NULL;

END;

$$;


ALTER FUNCTION public.f_hora_ingreso() OWNER TO postgres;

--
-- Name: f_valor_carrera(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.f_valor_carrera() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN

IF (TG_OP = 'INSERT') THEN

	UPDATE carrera 

	SET VALOR = nroKm*1000;

END IF;

RETURN NULL;

END;

$$;


ALTER FUNCTION public.f_valor_carrera() OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: carrera; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera (
    celularconductor character(10) NOT NULL,
    celularcliente character(10) NOT NULL,
    latorigen double precision,
    lngorigen double precision,
    latdestino double precision,
    lngdestino double precision,
    nrokm double precision,
    valor double precision,
    calificacion integer,
    estado boolean,
    fecha_carrera character varying(20)
);


ALTER TABLE public.carrera OWNER TO postgres;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    celular character(10) NOT NULL,
    nombre character varying(15),
    apellido character varying(15),
    direccion character varying(15),
    passwordcliente character varying(15),
    nrotarjeta character(16)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- Name: conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conductor (
    celular character(10) NOT NULL,
    nombre character varying(15),
    apellido character varying(15),
    nacimiento character varying(15),
    direccion character varying(15),
    passwordconductor character varying(15),
    tipodocumento character varying(15),
    nrodocumento integer
);


ALTER TABLE public.conductor OWNER TO postgres;

--
-- Name: conductor_taxi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conductor_taxi (
    celular character(10) NOT NULL,
    placa character(6) NOT NULL,
    fechaingreso date,
    horaingreso time without time zone,
    horafin time without time zone
);


ALTER TABLE public.conductor_taxi OWNER TO postgres;

--
-- Name: favoritos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favoritos (
    celular character(10) NOT NULL,
    nombre character varying(15),
    lat double precision NOT NULL,
    lng double precision NOT NULL
);


ALTER TABLE public.favoritos OWNER TO postgres;

--
-- Name: posicioncliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posicioncliente (
    celular character(10) NOT NULL,
    lat double precision,
    lng double precision
);


ALTER TABLE public.posicioncliente OWNER TO postgres;

--
-- Name: posicionconductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posicionconductor (
    celular character(10) NOT NULL,
    lat double precision,
    lng double precision,
    estado boolean
);


ALTER TABLE public.posicionconductor OWNER TO postgres;

--
-- Name: taxi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taxi (
    placa character(6) NOT NULL,
    modelo character varying(15),
    baul character varying(4),
    "año" character varying(15),
    soat character varying(10),
    marca character varying(15)
);


ALTER TABLE public.taxi OWNER TO postgres;

--
-- Name: viajescliente; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.viajescliente AS
 SELECT carrera.celularcliente AS cliente,
    conductor.nombre AS conductor,
    carrera.nrokm AS km,
    carrera.valor,
    carrera.calificacion
   FROM (public.conductor
     JOIN public.carrera ON ((carrera.celularconductor = conductor.celular)));


ALTER TABLE public.viajescliente OWNER TO postgres;

--
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (celularconductor, celularcliente, latorigen, lngorigen, latdestino, lngdestino, nrokm, valor, calificacion, estado, fecha_carrera) FROM stdin;
3192162284	3192162284	3.40842738888722829	-76.5295171737671041	3.41373946366084668	-76.5365767478943013	1.44259999999999988	1442.59999999999991	0	t	14/4/2019 1:14
3192162284	3192162284	3.40984108907229766	-76.5290880203247212	3.4129897774681992	-76.5355253219604634	2.16169999999999973	2161.69999999999982	0	t	14/4/2019 1:11
3192162284	3192162284	3.40960547251908785	-76.5296244621276998	3.41256138509545748	-76.534237861633315	1.48530000000000006	1485.29999999999995	0	t	14/4/2019 1:8
3192162284	3192162284	3.41001244652926783	-76.529688835144043	3.40739924199317645	-76.5374565124511861	1.63480000000000003	1634.79999999999995	0	t	14/4/2019 1:4
3192162284	3192162284	3.40864158601852241	-76.5291094779968404	3.41213299253170455	-76.5342807769775533	1.41280000000000006	1412.79999999999995	0	t	14/4/2019 1:3
3192162284	3192162284	3.40849164803163429	-76.5294957160949849	3.41348242846070793	-76.5362548828125142	1.43459999999999988	1434.59999999999991	0	t	14/4/2019 1:2
3192162284	3192162284	3.40898430132938346	-76.5305256843567037	3.41211157289851119	-76.5267276763916158	1.12890000000000001	1128.90000000000009	0	t	14/4/2019 0:57
3192162284	3192162284	3.41091207267736385	-76.5309333801269673	3.40761343935336924	-76.5278434753418111	0.765199999999999991	765.200000000000045	0	t	14/4/2019 0:48
3192162284	3192162284	3.40900572103225619	-76.5298819541931294	3.41303261669496871	-76.5363407135009908	2.02099999999999991	2021	0	t	14/4/2019 0:34
3192162284	3192162284	3.40919849833667454	-76.529688835144043	3.41311829514278253	-76.5375852584839009	1.80709999999999993	1807.09999999999991	0	t	14/4/2019 0:33
3192162284	3192162284	3.41044084003810388	-76.5296244621276998	3.41224009069054635	-76.5375208854675435	1.56159999999999988	1561.59999999999991	0	t	14/4/2019 1:15
3192162284	3192162284	3.40874868456628244	-76.5302038192749166	3.41194021581571461	-76.5340447425842427	1.09349999999999992	1093.5	0	t	14/4/2019 0:29
3192162284	3192162284	3.40840596917148053	-76.5300965309143209	3.41438205136024875	-76.5374779701233052	2.41159999999999997	2411.59999999999991	0	t	14/4/2019 0:17
3192162284	3192162284	3.40896288162604	-76.5305256843567037	3.40896288162604	-76.5371561050415181	1.54559999999999986	1545.59999999999991	0	t	13/4/2019 23:2
3192162284	3192162284	3.40917707863808905	-76.5304398536682271	3.40917707863808905	-76.5355467796325826	1.26229999999999998	1262.29999999999995	0	t	13/4/2019 23:6
3192162284	3192162284	3.41005528588874274	-76.5290880203247212	3.41172601941925535	-76.5347957611084126	1.50940000000000007	1509.40000000000009	0	t	14/4/2019 1:12
3192162284	3192162284	3.40913423923949344	-76.5303111076355123	3.41260422434132327	-76.5337228775024556	1.68079999999999985	1680.79999999999995	0	t	14/4/2019 1:9
3192162284	3192162284	3.40986250875607455	-76.5300536155700826	3.41262564396354984	-76.5366411209106445	1.37420000000000009	1374.20000000000005	0	t	14/4/2019 1:6
3192162284	3192162284	3.40872726485768451	-76.5303111076355123	3.40872726485768451	-76.5349030494689941	1.17790000000000017	1177.90000000000009	0	t	13/4/2019 23:36
3192162284	3192162284	3.40868442543906403	-76.5305900573730611	3.40868442543906403	-76.534237861633315	1.08170000000000011	1081.70000000000005	0	t	13/4/2019 23:37
3192162284	3192162284	3.409048560436577	-76.5304613113403462	3.409048560436577	-76.5341949462890625	1.16229999999999989	1162.29999999999995	0	t	13/4/2019 23:38
3192162284	3192162284	3.40911281953948331	-76.5296030044555806	3.40911281953948331	-76.5362763404846191	1.6996	1699.59999999999991	0	t	13/4/2019 23:51
3192162284	3192162284	3.4087058451486163	-76.5305900573730611	3.4087058451486163	-76.5350532531738423	1.29049999999999998	1290.5	0	t	13/4/2019 23:56
3192162284	3192162284	3.41099775131424243	-76.5309119224548482	3.40748492094298383	-76.5258908271789693	1.2874000000000001	1287.40000000000009	0	t	14/4/2019 0:20
3192162284	3192162284	3.40954121344910677	-76.5292596817016744	3.41346100885759007	-76.5367913246154927	1.96470000000000011	1964.70000000000005	0	t	14/4/2019 0:31
3192162284	3192162284	3.41116910856506195	-76.5308475494384908	3.41144756403249438	-76.5378427505493306	1.38240000000000007	1382.40000000000009	0	t	14/4/2019 0:24
3192162284	3192162284	3.40889862251312126	-76.5300321578979492	3.41256138509545748	-76.5343022346496724	1.11549999999999994	1115.5	0	t	14/4/2019 0:29
3192162284	3192162284	3.40855590717172729	-76.5299034118652486	3.41343958925398905	-76.5370488166809224	1.72320000000000007	1723.20000000000005	0	t	14/4/2019 0:42
3192162284	3192162284	3.40915565893903283	-76.5305256843567037	3.41350384806334262	-76.527521610260024	1.0855999999999999	1085.59999999999991	0	t	14/4/2019 0:46
3192162284	3192162284	3.40921991803477642	-76.5302467346191548	3.41181169798356665	-76.5338945388794087	1.16290000000000004	1162.90000000000009	0	t	14/4/2019 0:44
3192162284	3192162284	3.40988392843939314	-76.5300536155700826	3.40729214329520547	-76.5382719039917134	1.72670000000000012	1726.70000000000005	0	t	14/4/2019 0:27
3192162284	3192162284	3.41022664330754655	-76.5291309356689595	3.41022664330754655	-76.535954475402832	2.0405000000000002	2040.50000000000023	0	t	14/4/2019 0:2
3192162284	3192162284	3.40936985590814468	-76.5298390388488912	3.40936985590814468	-76.5338945388794087	1.22599999999999998	1226	0	t	14/4/2019 0:6
3192162284	3192162284	3.40909139983898957	-76.5297961235046529	3.40909139983898957	-76.5382289886474751	2.86929999999999996	2869.30000000000018	0	t	14/4/2019 0:7
3192162284	3192162284	3.40992676780460613	-76.5284657478332662	3.41421069468245086	-76.5366625785827637	2.03310000000000013	2033.10000000000014	0	t	14/4/2019 0:10
3192162284	3192162284	3.40911281953948331	-76.5293455123901509	3.41384656164059752	-76.5305685997009419	0.804100000000000037	804.100000000000023	0	t	14/4/2019 0:18
3192162284	3192162284	3.40947695437482601	-76.5291094779968404	3.41380372245013719	-76.5369415283203267	2.06619999999999981	2066.19999999999982	0	t	14/4/2019 0:23
3192162284	3192162284	3.40857732688414172	-76.5303969383239888	3.4123257692090192	-76.5350961685180806	1.17509999999999981	1175.09999999999991	0	t	14/4/2019 1:4
3192162284	3192162284	3.40943411498958859	-76.5300965309143209	3.40536436469381787	-76.5363621711731099	1.64209999999999989	1642.09999999999991	0	t	14/4/2019 0:38
3192162284	3192162284	3.409048560436577	-76.5306973457336426	3.41245428697242925	-76.5247321128845357	1.18440000000000012	1184.40000000000009	0	t	14/4/2019 0:50
3192162284	3192162284	3.40868442543906403	-76.5306758880615376	3.41176885870237134	-76.5260839462280416	1.18790000000000018	1187.90000000000009	0	t	14/4/2019 0:52
3192162284	3192162284	3.40915565893903283	-76.5306758880615376	3.41369662446560262	-76.5268349647522115	0.967799999999999994	967.799999999999955	0	t	14/4/2019 0:52
3192162284	3192162284	3.40892004221790268	-76.5300107002258301	3.41393224001580586	-76.5347528457641744	1.40129999999999999	1401.29999999999995	0	t	14/4/2019 0:54
3192162284	3192162284	3.41076213504448367	-76.5305685997009419	3.40709936560881532	-76.5265345573425293	1.12779999999999991	1127.79999999999995	0	t	14/4/2019 1:10
\.


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (celular, nombre, apellido, direccion, passwordcliente, nrotarjeta) FROM stdin;
3218756322	Alejo	Fajardo	Calle 5	123456789	1234123412341234
3128763456	Andres	Gonzales	Carrera 100	1234	1234123412341234
3192162284	Santiago	Zuluaga	Cll 13c #56-38	hola	1234567891234567
\.


--
-- Data for Name: conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conductor (celular, nombre, apellido, nacimiento, direccion, passwordconductor, tipodocumento, nrodocumento) FROM stdin;
3218752799	Carlos	Restrepo	1982-03-18	Cra 8	123456789	Cedula	16543876
3192162284	Santiago	Zuluaga	1998-19-12	cll 13c #56-38	hola	cc	1144105479
\.


--
-- Data for Name: conductor_taxi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conductor_taxi (celular, placa, fechaingreso, horaingreso, horafin) FROM stdin;
3218752799	ABC123	2019-04-07	18:03:57.044181	24:00:00
\.


--
-- Data for Name: favoritos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favoritos (celular, nombre, lat, lng) FROM stdin;
\.


--
-- Data for Name: posicioncliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posicioncliente (celular, lat, lng) FROM stdin;
\.


--
-- Data for Name: posicionconductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posicionconductor (celular, lat, lng, estado) FROM stdin;
3192162284	3.40896769999999982	-76.5316510999999906	f
\.


--
-- Data for Name: taxi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.taxi (placa, modelo, baul, "año", soat, marca) FROM stdin;
ABC123	PICANTO	SI	2010-03-30	ASSD324SEG	KIA
\.


--
-- Name: cliente pk_cliente; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (celular);


--
-- Name: conductor pk_conductor; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conductor
    ADD CONSTRAINT pk_conductor PRIMARY KEY (celular);


--
-- Name: conductor_taxi pk_conductor_taxi; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conductor_taxi
    ADD CONSTRAINT pk_conductor_taxi PRIMARY KEY (celular, placa);


--
-- Name: favoritos pk_favoritos; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT pk_favoritos PRIMARY KEY (lat, lng);


--
-- Name: taxi pk_taxi; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taxi
    ADD CONSTRAINT pk_taxi PRIMARY KEY (placa);


--
-- Name: posicioncliente posicioncliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posicioncliente
    ADD CONSTRAINT posicioncliente_pkey PRIMARY KEY (celular);


--
-- Name: posicionconductor posicionconductor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posicionconductor
    ADD CONSTRAINT posicionconductor_pkey PRIMARY KEY (celular);


--
-- Name: i_cliente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_cliente ON public.cliente USING btree (celular, passwordcliente);


--
-- Name: i_conductor; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_conductor ON public.conductor USING btree (celular, passwordconductor);


--
-- Name: i_conductor_taxi; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_conductor_taxi ON public.conductor_taxi USING btree (celular, placa);


--
-- Name: i_taxi_año; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "i_taxi_año" ON public.taxi USING btree ("año");


--
-- Name: i_taxi_placa; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_taxi_placa ON public.taxi USING btree (placa);


--
-- Name: i_valor; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX i_valor ON public.carrera USING btree (valor);


--
-- Name: conductor_taxi insertar_fecha_ingreso; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER insertar_fecha_ingreso AFTER INSERT ON public.conductor_taxi FOR EACH ROW EXECUTE PROCEDURE public.f_fecha_ingreso();


--
-- Name: conductor_taxi insertar_hora_ingreso; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER insertar_hora_ingreso AFTER INSERT ON public.conductor_taxi FOR EACH ROW EXECUTE PROCEDURE public.f_hora_ingreso();


--
-- Name: carrera insertar_valor_carrera; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER insertar_valor_carrera AFTER INSERT ON public.carrera FOR EACH ROW EXECUTE PROCEDURE public.f_valor_carrera();


--
-- Name: carrera carrera_celularcliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT carrera_celularcliente_fkey FOREIGN KEY (celularcliente) REFERENCES public.cliente(celular) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: carrera carrera_celularconductor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT carrera_celularconductor_fkey FOREIGN KEY (celularconductor) REFERENCES public.conductor(celular) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: conductor_taxi conductor_taxi_celular_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conductor_taxi
    ADD CONSTRAINT conductor_taxi_celular_fkey FOREIGN KEY (celular) REFERENCES public.conductor(celular) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: conductor_taxi conductor_taxi_placa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conductor_taxi
    ADD CONSTRAINT conductor_taxi_placa_fkey FOREIGN KEY (placa) REFERENCES public.taxi(placa) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: favoritos favoritos_celular_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_celular_fkey FOREIGN KEY (celular) REFERENCES public.cliente(celular) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: posicionconductor fk_celular; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posicionconductor
    ADD CONSTRAINT fk_celular FOREIGN KEY (celular) REFERENCES public.conductor(celular);


--
-- Name: posicioncliente fk_celular; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posicioncliente
    ADD CONSTRAINT fk_celular FOREIGN KEY (celular) REFERENCES public.cliente(celular);


--
-- PostgreSQL database dump complete
--

