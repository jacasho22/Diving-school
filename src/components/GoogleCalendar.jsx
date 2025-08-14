import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

// Load the Google API client library
const loadGoogleApi = () => {
  return new Promise((resolve, reject) => {
    if (window.gapi) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Google API script loaded successfully');
      resolve();
    };
    script.onerror = (error) => {
      console.error('Error loading Google API script:', error);
      reject(error);
    };
    document.head.appendChild(script);
  });
};

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const CLIENT_ID = '896861059176-rlgibaemk388f1317vn6r5ho3girmj2r.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyAj3kp8TMX4AxaE_OatZ56J6viFkvFYVlo';
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  const handleAuthClick = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      const user = await authInstance.signIn({
        prompt: 'select_account',
        ux_mode: 'popup',
        redirect_uri: window.location.origin
      });
      if (user) {
        setIsAuthenticated(true);
        await loadEvents();
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(
        'Error de autenticación: Por favor, asegúrate de que has permitido las ventanas emergentes y que tienes una cuenta de Google válida. ' +
        (err.error === 'popup_blocked_by_browser' ? 'El navegador ha bloqueado la ventana emergente. ' : '') +
        (err.message || 'Error desconocido')
      );
      setIsLoading(false);
    }
  };

  const loadEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      });

      setEvents(response.result.items || []);
      setIsLoading(false);
    } catch (err) {
      setError('Error al cargar eventos: ' + (err.message || 'Error desconocido'));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initClient = async () => {
      try {
        await loadGoogleApi();
        await new Promise((resolve, reject) => {
          gapi.load('client:auth2', {
            callback: resolve,
            onerror: reject
          });
        });
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_DOC],
          scope: SCOPES
        });
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          setIsAuthenticated(true);
          await loadEvents();
        } else {
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Error al inicializar el cliente: ' + (err.message || 'Error desconocido'));
        setIsLoading(false);
      }
    };

    initClient();
  }, []);


  if (isLoading) return <div className="calendar-message">Cargando calendario...</div>;
  if (error) return <div className="calendar-error">{error}</div>;

  return (
    <div className="google-calendar-container">
      <h2>Próximos Cursos</h2>
      {!isAuthenticated ? (
        <div className="calendar-auth">
          <p>Para ver los próximos cursos, necesitas autenticarte con Google Calendar</p>
          <button onClick={handleAuthClick} className="auth-button">
            Conectar con Google Calendar
          </button>
        </div>
      ) : (
        <div className="calendar-events">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="calendar-event">
                <h3>{event.summary}</h3>
                <p>Fecha: {new Date(event.start.dateTime || event.start.date).toLocaleDateString()}</p>
                {event.start.dateTime && (
                  <p>Hora: {new Date(event.start.dateTime).toLocaleTimeString()}</p>
                )}
                {event.description && <p>Descripción: {event.description}</p>}
              </div>
            ))
          ) : (
            <p>No hay próximos cursos programados</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;