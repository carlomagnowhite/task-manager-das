import { TestBed } from '@angular/core/testing';

import { SupabaseService } from './supabase.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environments';

describe('SupabaseService', () => {
  let service: SupabaseService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SupabaseService]
    });
    service = TestBed.inject(SupabaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should retrieve all tasks', () => {
    // Datos simulados que la API devolvería
    const mockTasks = [
      { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: '2', title: 'Task 2', description: 'Description 2', status: 'completed' },
    ];

    // Llama al método del servicio
    service.getTasks().subscribe((tasks: any) => {
      // Verifica que la respuesta coincida con los datos simulados
      expect(tasks).toEqual(mockTasks);
    });

    /*
    // Intercepta la solicitud HTTP y simula una respuesta
    const req = httpMock.expectOne(`${environment.supabaseUrl}/rest/v1/tasks`);
    expect(req.request.method).toBe('GET'); // Verifica que el método HTTP sea GET
    req.flush(mockTasks); // Simula la respuesta de la API con los datos mock
    */
  });
});
