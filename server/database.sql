--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.12
-- Dumped by pg_dump version 9.6.12

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
-- Name: f_fecha_carrera(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.f_fecha_carrera() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
IF (TG_OP = 'INSERT') THEN
	UPDATE carrera 
	SET fecha_carrera = CURRENT_DATE;
END IF;
RETURN NULL;
END;
$$;


ALTER FUNCTION public.f_fecha_carrera() OWNER TO postgres;

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
    nrokm integer,
    valor double precision,
    tiempo time without time zone,
    calificacion integer,
    fecha_carrera date
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
    "contraseña" character varying(15),
    nrotarjeta character(16),
    lat double precision,
    lng double precision
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- Name: conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conductor (
    celular character(10) NOT NULL,
    nombre character varying(15),
    apellido character varying(15),
    nacimiento date,
    direccion character varying(15),
    "contraseña" character varying(15),
    tipodocumento character varying(15),
    nrodocumento integer,
    lat double precision,
    lng double precision
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
    lat double precision,
    lng double precision
);


ALTER TABLE public.favoritos OWNER TO postgres;

--
-- Name: taxi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taxi (
    placa character(6) NOT NULL,
    modelo character varying(15),
    baul character varying(4),
    "año" date,
    soat character varying(10),
    marca character varying(15)
);


ALTER TABLE public.taxi OWNER TO postgres;

--
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (celularconductor, celularcliente, latorigen, lngorigen, latdestino, lngdestino, nrokm, valor, tiempo, calificacion, fecha_carrera) FROM stdin;
3218752799	3128763456	12312	2133	3454343	4345435	12	12000	17:48:17.255489	4	2019-04-07
\.


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (celular, nombre, apellido, direccion, "contraseña", nrotarjeta, lat, lng) FROM stdin;
3218756322	Alejo	Fajardo	Calle 5	123456789	1234123412341234	12332	12332
3128763456	Andres	Gonzales	Carrera 100	1234	1234123412341234	12332	12332
\.


--
-- Data for Name: conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conductor (celular, nombre, apellido, nacimiento, direccion, "contraseña", tipodocumento, nrodocumento, lat, lng) FROM stdin;
3218752799	Carlos	Restrepo	1982-03-18	Cra 8	123456789	Cedula	16543876	324223	323432
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
-- Data for Name: taxi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.taxi (placa, modelo, baul, "año", soat, marca) FROM stdin;
ABC123	PICANTO	SI	2010-03-30	ASSD324SEG	KIA
\.


--
-- Name: carrera pk_carrera; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT pk_carrera PRIMARY KEY (celularconductor, celularcliente);


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
    ADD CONSTRAINT pk_favoritos PRIMARY KEY (celular);


--
-- Name: taxi pk_taxi; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taxi
    ADD CONSTRAINT pk_taxi PRIMARY KEY (placa);


--
-- Name: i_carrera; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_carrera ON public.carrera USING btree (celularconductor, celularcliente);


--
-- Name: i_cliente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_cliente ON public.cliente USING btree (celular, "contraseña");


--
-- Name: i_conductor; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_conductor ON public.conductor USING btree (celular, "contraseña");


--
-- Name: i_conductor_taxi; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_conductor_taxi ON public.conductor_taxi USING btree (celular, placa);


--
-- Name: i_favoritos; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX i_favoritos ON public.favoritos USING btree (celular);


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
-- Name: carrera insertar_fecha_carrera; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER insertar_fecha_carrera AFTER INSERT ON public.carrera FOR EACH ROW EXECUTE PROCEDURE public.f_fecha_carrera();


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
-- Name: TABLE carrera; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.carrera TO seleccion;
GRANT DELETE ON TABLE public.carrera TO eliminacion;
GRANT INSERT ON TABLE public.carrera TO insercion;
GRANT UPDATE ON TABLE public.carrera TO modificacion;


--
-- Name: TABLE cliente; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.cliente TO seleccion;
GRANT DELETE ON TABLE public.cliente TO eliminacion;
GRANT INSERT ON TABLE public.cliente TO insercion;
GRANT UPDATE ON TABLE public.cliente TO modificacion;


--
-- Name: TABLE conductor; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.conductor TO seleccion;
GRANT DELETE ON TABLE public.conductor TO eliminacion;
GRANT INSERT ON TABLE public.conductor TO insercion;
GRANT UPDATE ON TABLE public.conductor TO modificacion;


--
-- Name: TABLE conductor_taxi; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.conductor_taxi TO seleccion;
GRANT DELETE ON TABLE public.conductor_taxi TO eliminacion;
GRANT INSERT ON TABLE public.conductor_taxi TO insercion;
GRANT UPDATE ON TABLE public.conductor_taxi TO modificacion;


--
-- Name: TABLE favoritos; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.favoritos TO seleccion;
GRANT DELETE ON TABLE public.favoritos TO eliminacion;
GRANT INSERT ON TABLE public.favoritos TO insercion;
GRANT UPDATE ON TABLE public.favoritos TO modificacion;


--
-- Name: TABLE taxi; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.taxi TO seleccion;
GRANT DELETE ON TABLE public.taxi TO eliminacion;
GRANT INSERT ON TABLE public.taxi TO insercion;
GRANT UPDATE ON TABLE public.taxi TO modificacion;


--
-- PostgreSQL database dump complete
--

