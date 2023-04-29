import { USER_ROLE } from "@prisma/client";

export const adminUser = {
  id: 1,
  name: "Youth Api",
  phone: "+355692055401",
  password: "admin123",
  credit: 0,
  qrCodeId: "545747eA87E9",
  role: USER_ROLE.ADMIN,
};
export const customerUser = {
  id: 2,
  name: "Youth Api",
  phone: "+355692085401",
  password: "customer123",
  credit: 100,
  qrCodeId: "545787eA87E8",
  role: USER_ROLE.CUSTOMER,
};

export const errorUser = {
  id: 2,
  name: "Youth Api",
  phone: "+35569208540",
  credit: 100,
  qrCodeId: "CUSTOMER545787eA87E8",
  role: "TEST",
};

export const customerLoginData = {
  phone: "+355692085401",
  password: "customer123",
};
export const adminLoginData = {
  phone: "+355692055401",
  password: "admin123",
};

export const errorLoginData = {
  phone: "+3556920854",
  password: "123456",
};
