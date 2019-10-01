import { TestBed } from '@angular/core/testing';

import { Messages.Service.TsService } from './messages.service.ts.service';

describe('Messages.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Messages.Service.TsService = TestBed.get(Messages.Service.TsService);
    expect(service).toBeTruthy();
  });
});
