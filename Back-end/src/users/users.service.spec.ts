import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: DatabaseService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
            agronomo: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'securepassword',
        role: 'AGRONOMO',
        crea: '123456',
      };

      const hashedPassword = 'hashedpassword';
      const user = {
        ...createUserDto,
        password: hashedPassword,
      };

      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashedPassword as never);
      jest.spyOn(databaseService.user, 'create').mockResolvedValue(user as any);

      const result = await service.create(createUserDto as any);
      expect(result).toEqual(user);
      expect(databaseService.user.create).toHaveBeenCalledWith({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          password: hashedPassword,
          role: createUserDto.role,
          Agronomo: {
            create: {
              crea: createUserDto.crea,
            },
          },
        },
      });
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [{ id: '1', name: 'John Doe' }];
      jest
        .spyOn(databaseService.user, 'findMany')
        .mockResolvedValue(users as any);

      const result = await service.findAll();
      expect(result).toEqual(users);
      expect(databaseService.user.findMany).toHaveBeenCalled();
    });

    it('should return users by role', async () => {
      const users = [{ id: '1', name: 'John Doe', role: 'AGRONOMO' }];
      jest
        .spyOn(databaseService.user, 'findMany')
        .mockResolvedValue(users as any);

      const result = await service.findAll('AGRONOMO');
      expect(result).toEqual(users);
      expect(databaseService.user.findMany).toHaveBeenCalledWith({
        where: { role: 'AGRONOMO' },
      });
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const user = {
        id: '1',
        name: 'John Doe',
        role: 'AGRONOMO',
        Agronomo: { crea: '123456' },
      };
      jest
        .spyOn(databaseService.user, 'findUnique')
        .mockResolvedValue(user as any);

      const result = await service.findOne('1');
      expect(result).toEqual({
        ...user,
        crea: '123456',
      });
      expect(databaseService.user.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { Agronomo: true },
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      jest.spyOn(databaseService.user, 'findUnique').mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow('User not found');
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto = {
        name: 'John Doe Updated',
        currentPassword: 'oldpassword',
        newPassword: 'newpassword',
      };

      const user = {
        id: '1',
        name: 'John Doe',
        password: await bcrypt.hash('oldpassword', 10),
      };
      jest
        .spyOn(databaseService.user, 'findUnique')
        .mockResolvedValue(user as any);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);
      jest
        .spyOn(bcrypt, 'hash')
        .mockResolvedValue('hashednewpassword' as never);
      jest.spyOn(databaseService.user, 'update').mockResolvedValue({
        ...user,
        ...updateUserDto,
        password: 'hashednewpassword',
      } as any);

      const result = await service.update('1', updateUserDto as any);
      expect(result).toEqual({
        ...user,
        ...updateUserDto,
        password: 'hashednewpassword',
      });
      expect(databaseService.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: {
          name: updateUserDto.name,
          password: 'hashednewpassword',
        },
      });
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const user = { id: '1', name: 'John Doe' };
      jest.spyOn(databaseService.user, 'delete').mockResolvedValue(user as any);

      const result = await service.remove('1');
      expect(result).toEqual(user);
      expect(databaseService.user.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      const user = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
      jest
        .spyOn(databaseService.user, 'findUnique')
        .mockResolvedValue(user as any);

      const result = await service.findByEmail('john.doe@example.com');
      expect(result).toEqual(user);
      expect(databaseService.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'john.doe@example.com' },
      });
    });
  });

  describe('updatePassword', () => {
    it('should update a user password', async () => {
      const user = { id: '1', name: 'John Doe', password: 'oldpassword' };
      jest
        .spyOn(bcrypt, 'hash')
        .mockResolvedValue('hashednewpassword' as never);
      jest
        .spyOn(databaseService.user, 'update')
        .mockResolvedValue({ ...user, password: 'hashednewpassword' } as any);

      const result = await service.updatePassword('1', 'newpassword');
      expect(result).toEqual({ ...user, password: 'hashednewpassword' });
      expect(databaseService.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: {
          password: 'hashednewpassword',
        },
      });
    });
  });

  describe('findCREA', () => {
    it('should return CREA by user id', async () => {
      const agronomo = { userId: '1', crea: '123456' };
      jest
        .spyOn(databaseService.agronomo, 'findUnique')
        .mockResolvedValue(agronomo as any);

      const result = await service.findCREA('1');
      expect(result).toEqual(agronomo);
      expect(databaseService.agronomo.findUnique).toHaveBeenCalledWith({
        where: { userId: '1' },
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      jest
        .spyOn(databaseService.agronomo, 'findUnique')
        .mockResolvedValue(null);

      await expect(service.findCREA('1')).rejects.toThrow(NotFoundException);
    });
  });
});
