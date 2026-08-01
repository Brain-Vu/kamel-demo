# Kamel Ride Demo Dashboard

A real-time ride request analytics dashboard built with React, TypeScript, and Node.js.

## Overview

This project simulates ride requests, ingests ride data through an API pipeline, and visualizes rider activity through an interactive dashboard.

Features:
- Generate simulated ride requests
- Ingest and store ride events
- View recent ride requests
- Display ride statistics
- Visualize rider traffic trends
- Map ride locations

## Tech Stack

Frontend:
- React
- TypeScript
- Material UI
- Recharts
- React Leaflet

Backend:
- Node.js
- Express
- TypeScript

## Architecture

Simulator
    |
    v
API Endpoint
    |
    v
Ride Request Store
    |
    v
Analytics Service
    |
    v
Dashboard

## Running Locally

### Install dependencies
npm install

### Starting the backend

cd backend
npm run dev

### Starting the frontend

cd frontend
npm run dev
