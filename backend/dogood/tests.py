from django.test import TestCase


class TestNothing(TestCase):
    def testOnePlusOne(self):
        self.assertEqual(1 + 1, 2)
