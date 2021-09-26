import {TestBed} from '@angular/core/testing';

import {City, UsersService} from './users.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {UserResponse} from "../_model/users/response.model";

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;
  let user: UserResponse | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UsersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should set user subject", () => {
    // set SUBJECT with data
    const nextSpy = spyOn(service.users, 'next');
    service.getUsers();
    expect(nextSpy).toHaveBeenCalled();
  });

  it("should set location subject", () => {
    service.locationTerm = 'Prague';
    // set SUBJECT with data
    const nextSpy = spyOn(service.locations, 'next');
    service.getLocations();
    expect(nextSpy).toHaveBeenCalled();
  });

  it("should set language subject", () => {
    service.languageTerm = 'JavaScript';
    // set SUBJECT with data
    const nextSpy = spyOn(service.languages, 'next');
    service.getLanguages();
    expect(nextSpy).toHaveBeenCalled();
  });

  it("should return user data", () => {
    service.callUserRequest('test').subscribe();
    const req = httpTestingController.expectOne(req => req.url.includes('users'));

    expect(req.request.params.has('q')).toBeTruthy();
    expect(req.request.params.has('page')).toBeTruthy();
    expect(req.request.params.has('per_page')).toBeTruthy();

    req.flush({});
  });

  it("should return location data if term is filled", (done) => {
    service.locationTerm = 'Prague';
    // set SUBJECT with data
    service.getLocations();
    // subscribe data
    service.locations.subscribe((result: City[]) => {
      expect(result).toBeTruthy();
      done();
    });
  });
  it("should return language data if term is filled", (done) => {
    service.languageTerm = 'JavaScript';
    // set SUBJECT with data
    service.getLanguages();
    // subscribe data
    service.languages.subscribe((result: string[]) => {
      expect(result).toBeTruthy();
      done();
    });
  });
  it("should return location data if term is empty", (done) => {
    service.locationTerm = '';
    // set SUBJECT with data
    service.getLocations();
    // subscribe data
    service.locations.subscribe((result: City[]) => {
      expect(result).toHaveSize(0);
      done();
    });
  });
  it("should return language data if term is empty", (done) => {
    service.languageTerm = '';
    // set SUBJECT with data
    service.getLanguages();
    // subscribe data
    service.languages.subscribe((result: string[]) => {
      expect(result).toHaveSize(0);
      done();
    });
  });
});
