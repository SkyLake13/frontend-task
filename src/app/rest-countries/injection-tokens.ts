import { InjectionToken } from "@angular/core";
import { APIClient } from "./api-client";

export const API_BASE_URL = new InjectionToken<string>('Base url of backend API');
export const API_CLIENT = new InjectionToken<APIClient>('Backend API service');