from rest_framework import serializers
from EmpApp.models import Departments,Employee


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId',
                  'DepartmentName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('EmployeeId',
                  'EmployeeName',
                  'Department',
                  'Salary')
