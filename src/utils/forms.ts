export const MUSIC_FORM_CONFIG = {
  formId: '1crnnYq8KK3fHRHNGpWHSalHlmZnoNi_KOM0R1jqI5aA',
  fields: {
    name: '1164357296',
    song: '1710633586',
    artist: '1761084776',
    link: '1504255932',
  },
};

export const RSVP_FORM_CONFIG = {
  formId: '1UrYYdaUHCSIx_NGzLp4WMtMcmczg_VT0GJ_XqND07L8',
  fields: {
    name: '722181604',
    attendance: '2037012221',
    guestCount: '349210955',
    details: '1921230472',
  },
};

export interface SubmissionStatus {
  type: 'success' | 'error' | '';
  message: string;
}

async function submitForm(formId: string, data: Record<string, string>): Promise<void> {
  const formUrl = `https://docs.google.com/forms/d/${formId}/formResponse`;
  
  return new Promise((resolve, reject) => {
    const iframeName = `hidden-frame-${Date.now()}`;
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    form.target = iframeName;
    form.style.display = 'none';

    // Add form fields
    for (const [key, value] of Object.entries(data)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    const cleanup = () => {
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
      if (document.body.contains(form)) document.body.removeChild(form);
    };

    iframe.onload = () => {
      cleanup();
      resolve();
    };

    iframe.onerror = () => {
      cleanup();
      reject(new Error('Form submission failed'));
    };

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      cleanup();
      resolve();
    }, 3000);
  });
}

export async function submitToGoogleForms(data: Record<string, string>): Promise<void> {
  const formData = new FormData();
  
  formData.append(`entry.${MUSIC_FORM_CONFIG.fields.name}`, data.name);
  formData.append(`entry.${MUSIC_FORM_CONFIG.fields.song}`, data.song);
  formData.append(`entry.${MUSIC_FORM_CONFIG.fields.artist}`, data.artist);
  
  if (data.link) {
    formData.append(`entry.${MUSIC_FORM_CONFIG.fields.link}`, data.link);
  }

  const formattedData: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    formattedData[key] = value as string;
  }

  return submitForm(MUSIC_FORM_CONFIG.formId, formattedData);
}

interface Attendee {
  name: string;
  dietaryRestrictions?: string;
  age?: number;
}

export async function submitRSVP(data: {
  attendance: 'yes' | 'no';
  attendees?: Attendee[];
  details?: string;
}): Promise<void> {
  const formattedData: Record<string, string> = {
    [`entry.${RSVP_FORM_CONFIG.fields.attendance}`]: data.attendance === 'yes' ? 'Sí' : 'No',
  };

  if (data.attendance === 'yes' && data.attendees) {
    // Submit the total number of attendees
    formattedData[`entry.${RSVP_FORM_CONFIG.fields.guestCount}`] = data.attendees.length.toString();
    
    // Format attendees information for the details field
    const attendeesDetails = data.attendees.map((attendee, index) => {
      let details = `Asistente ${index + 1}:\n`;
      details += `Nombre: ${attendee.name}\n`;
      if (attendee.dietaryRestrictions) {
        details += `Restricciones alimentarias: ${attendee.dietaryRestrictions}\n`;
      }
      if (attendee.age) {
        details += `Edad: ${attendee.age}\n`;
      }
      return details;
    }).join('\n');

    // Combine attendees details with any additional details
    const fullDetails = [
      attendeesDetails,
      data.details
    ].filter(Boolean).join('\n\n');

    formattedData[`entry.${RSVP_FORM_CONFIG.fields.details}`] = fullDetails;
    formattedData[`entry.${RSVP_FORM_CONFIG.fields.name}`] = data.attendees[0].name;
  }

  return submitForm(RSVP_FORM_CONFIG.formId, formattedData);
}