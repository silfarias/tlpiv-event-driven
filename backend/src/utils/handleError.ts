
export function handleError(error: unknown, customMessage: string = 'Error inesperado') {
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
    console.error(`Error: ${customMessage}`, errorMessage);

    return {
        ok: false,
        message: customMessage,
        error: errorMessage
    };
};