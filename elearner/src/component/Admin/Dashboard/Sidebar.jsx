import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser2Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack
      spacing={'8'}
      padding={'16'}
      boxShadow={'-5px 0 10px rgba(107,70,193,.6)'}
    >
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text={'Dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url={'course/create'}
        Icon={RiAddCircleFill}
        text={'Create Course'}
        active={location.pathname === '/admin/course/create'}
      />
      <LinkButton
        url={'courses'}
        Icon={RiEyeFill}
        text={'Courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser2Fill}
        text={'Users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button variant={'ghost'} colorScheme={active ? 'purple' : ''}>
        <Icon />
        {text}
      </Button>
    </Link>
  );
}
